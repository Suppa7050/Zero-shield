# A prototype of ZeroShield



This is a prototype of our project, "Zero-day attack detection using ML".


   PREREQUISITES:
        Tensorflow,
        Pandas,
        Numpy,
        openai,
        fastapi,
        uvicorn,
        CICFlowmeter
        
        
        
The application's frontend part is developed using ReactJS in the folder "frontend" where we'll be running "npm start" to run the frontend server. 
Coming to the backend fastAPI is used and all the models are deployed in the backend.
To use the prototype in your PC, clone this repo and follow these steps:



    Firstly, install all the required prerequisites mentioned above
    In the front end folder, run the npm start command
    In the backend folder, run the command: "uvicorn mlapiLSTM:app --port 8000"
    The backend will be running in the 8000 port.
    Now, you have to get your network logs using CICFlowmeter.
    Or just use the csv files provided in the "sample csvs" file.
    Click on the "choose file" botton, select the csv and click on the "Upload button"
    You will get the results along with a Chatgpt response containing details of the type of attack.
   
These are the colab links of how the models were trained:
https://colab.research.google.com/drive/10aCXPLgkCTz0yWi154ET5oZXvA4ObEN7
https://colab.research.google.com/drive/1RCt5ZJs2tPyIUgq4SdwqXjO_lhnmW7nV
https://colab.research.google.com/drive/1yDxBb0XMtCkLUdtb6nm7Xmesv50awKkI
   
PS: The frontend is a bit raw, we are still developing!
Contact: Dhanunjaysuppa@gmail.com
