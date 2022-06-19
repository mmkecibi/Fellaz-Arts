
"use strict";
const fse = require( "fs-extra" );
const { join } = require( "path" );

class modelUtils {
        static getInstance() {
        return new modelUtils();
    }
    constructor() {
      	console.log("Inside modelUtils Constructor");
    }

    loadSqlQueries = async folderName => {
      // determine the file path for the folder
      const filePath = join( process.cwd(), "server", "models", folderName );
   
      // get a list of all the files in the folder
      const files = await fse.readdir( filePath );
   
      // only files that have the .sql extension
      const sqlFiles = files.filter( f => f.endsWith( ".sql" ) );
   
      // loop over the files and read in their contents
      const queries = {};
      for ( let i = 0; i < sqlFiles.length; i++ ) {
          const query = fse.readFileSync( join( filePath, sqlFiles[ i ] ), { encoding: "UTF-8" } );
          queries[ sqlFiles[ i ].replace( ".sql", "" ) ] = query;
      }
      return queries;
   };
}

//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.modelUtils = modelUtils;
