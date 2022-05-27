# File Transfer Manager

## Compiling/build and run the application :

make security folder, That directory have public and private RSA256 key:
```
security
    |__private.key
    |__public.key
```
compiling : 
```npm run build```

start by node : 
```node ${directory}/build/index.js```

test is run app :
```curl localhost:5000```

run by nodemon config :
```npm run start```

## Run test script :

test : 
```npm run test```

## API

| **path** | **Method** | **Data** | **Description** |
| --- | --- | --- | --- |
| /                     | GET |  |Test is started app. |
| /auth/login           | POST |  {username: "admin", password: "password"} |Authenticate user. |
| /files/directory/*    | GET |  |Get folders and files into current directory. |
| /files/make_dir/      | POST | {new_dir_name: "tmp", path: "/file-transfer-manager"} |Make new directory. |
| /files/download/*     | GET |  | download file. |