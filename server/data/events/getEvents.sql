SELECT  [id]
      ,[name]
      ,[username]
      ,[email]
      ,[password]
      ,[bio]
      ,[user]
      ,[isactive]
      ,[CreatedDate]
      ,[CreatedBy]
      ,[ModifiedDate]
      ,[ModifiedBy]
      ,[DeletedDate]
      ,[DeletedBy]
      ,[IsDeleted]
  FROM [fsa].[dbo].[users]
WHERE   [id] = @userId
