 
# Zero-shield

## Overview
Zero-shield is a cybersecurity monitoring system designed to detect and classify ongoing network attacks in real time. By leveraging Cicflowmeter for network log collection and analysis, along with Random Forest and Isolation Forest models trained on the CICIDS dataset, the system can identify known threats and recognize potential zero-day attacks. This proactive approach enables organizations to stay ahead of emerging security threats, protecting their systems and data.

## Features
- **Real-time Threat Detection**: Analyzes network logs and classifies ongoing attacks in real time.
- **Zero-Day Attack Identification**: Detects unrecognized attacks and flags them as potential zero-day threats.
- **Machine Learning Integration**: Utilizes trained Random Forest and Isolation Forest models for accurate attack classification.
- **User-Friendly Interface**: Provides an intuitive React-based frontend for monitoring and managing threats.
- **Scalable Backend**: Built using Python and FastAPI for high performance and scalability.

## Tech Stack
- **Frontend**: React
- **Backend**: Python, FastAPI
- **Data Collection**: Cicflowmeter
- **Machine Learning**: Random Forest and Isolation Forest models
- **Dataset**: CICIDS dataset

### use it at :
https://zero-shield.vercel.app/


## Getting Started

### Prerequisites
Ensure the libraries mentioned in requirements.txt are installed on your system

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Suppa7050/Zero-shield.git
   cd Zero-shield
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv env
     source env/bin/activate # On Windows: env\Scripts\activate
     ```
   - Install the required dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the FastAPI server:
     ```bash
     uvicorn main:app --host 0.0.0.0 --port 8000
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```


### Usage
- Access the frontend at `http://localhost:3000`or the hosted version at https://zero-shield.vercel.app/.
- Monitor network activity and view classified attack logs in real time.
- Use the dashboard to view flagged zero-day attacks and take proactive measures.

## Machine Learning Models
- **Random Forest**: Used for classifying known attack types based on the CICIDS dataset.
- **Isolation Forest**: Detects anomalous behaviors indicative of potential zero-day attacks.
- **Training Dataset**: CICIDS dataset, preprocessed and used to train models for high accuracy.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

## Acknowledgments
- **CICFlowMeter**: For network log collection.
- **CICIDS Dataset**: For providing the data to train machine learning models.

---
For more information or inquiries, contact dhanunjaysuppa@gmail.com.

