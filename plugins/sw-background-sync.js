let backgroundSyncSupported = 'sync' in self.registration ? true : false
console.log('backgroundSyncSupported', backgroundSyncSupported)

/*
  queue - createPost
*/

let createRegisterQueue = null
if (backgroundSyncSupported) {
  createRegisterQueue = new workbox.backgroundSync.Queue('createRegisterQueue', {
    onSync: async ({queue}) => {
      let entry;
      while (entry = await queue.shiftRequest()) {
        try {
          await fetch(entry.request);
          console.log('Replay successful for request', entry.request);
          const channel = new BroadcastChannel('sw-messages');
          channel.postMessage({msg: 'offline-post-uploaded'});
        } catch (error) {
          console.error('Replay failed for request', entry.request, error);
  
          // Put the entry back in the queue and re-throw the error:
          await queue.unshiftRequest(entry);
          throw error;
        }
      }
      console.log('Replay complete!');
    }
  });
}

/*
caching strategies
*/

/*
  events - fetch
*/

if (backgroundSyncSupported) {
  self.addEventListener('fetch', (event) => {
    if (event.request.url.endsWith('register')) {
      // Clone the request to ensure it's safe to read when
      // adding to the Queue.
      if(!self.navigator.onLine) {
        //const promiseChain = fetch(event.request.clone()).catch((err) => {
          return createRegisterQueue.pushRequest({request: event.request});
      //  });
    
        event.waitUntil(promiseChain);
      }
    }
  });
}
/*
  events - push
*/

self.addEventListener('push', event => {
 if (event.data) {
    let data = JSON.parse(event.data.text())
    event.waitUntil(
      self.registration.showNotification(
        data.title,
        {
          body: data.body,
          icon: 'favicon.ico',
          badge: 'favicon.ico',
          data: {
            openUrl: data.openUrl
          }
        }
      )
    )
  }
})
/*
  events - notifications
*/

self.addEventListener('notificationclick', event => {
  let notification = event.notification
  let action = event.action

  if (action == 'hello') {
    console.log('Hello button was clicked')
  }
  else if (action == 'goodbye') {
    console.log('Goodbye button was clicked')
  }
  else {
    event.waitUntil(
      clients.matchAll().then(clis => {
        let clientUsingApp = clis.find(cli => {
          return cli.visibilityState === 'visible'
        })
        if (clientUsingApp) {
          clientUsingApp.navigate(notification.data.openUrl)
          clientUsingApp.focus()
        }
        else {
          clients.openWindow(notification.data.openUrl)
        }
      })
    ) 
  }
  notification.close()
})

self.addEventListener('notificationclose', event => {
  console.log('Notification was closed', event)
})

