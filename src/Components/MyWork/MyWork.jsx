import React from 'react'
// import netflix from '../../assets/NF Clone.png'
// import parkinson from '../../assets/Parkinson diseases.jpeg'
// import biomed from '../../assets/biomed.jpeg'
// import car from '../../assets/car.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyWork.css'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            <a href="https://github.com/Thapaswinithota/Parkinson-diseases-detection.git" target="_blank" rel="noopener noreferrer"> 
            <h1>1. Parkinson's Disease Detection using ML-04/2023</h1>
            </a>
            {/* <img src={parkinson} alt="" /> */}
            {/* <p>*Implemented a machine learning-based appXGBoostsing the XGBoost algorithm and clinical data for early detection of Parkinson's Disease, achieving 
            high accuracy according to results.</p>
            <p>*Collaborated in a team of two to develop and implement a machine learning model, utilizing innovative skills to enhance all classifiers.</p>
            <p>*Skills used include Machine Learning, Data Preprocessing, Python, and proficiency in various ML classifiers and libraries such as NumPy.</p> */}
        </div>
        <div className="mywork-container2">
            <a href="https://github.com/Thapaswinithota/Vehicle-Parking-Detection-using-CV.git" target="_blank" rel="noopener noreferrer">
            <h1>2. Vehicle Parking Space Counter using OpenCV-11/2023</h1>
            </a>
            {/* <img src={car} alt="" /> */}
            {/* <p>*Collaborated with a team of two to develop a real-time vehicle parking space counter using OpenCV and Python. Contributed by actively participating in 
            coding and providing innovative ideas to enhance project functionality and efficiency.</p>
            <p>*The project aimed to analyze video feeds from security cameras, detect and track vehicles, and accurately count available parking spaces, optimizing 
            parking management and enhancing security.</p>
            <p>*Skills used include Python, OpenCV, Computer vision, and object detection.</p> */}
        </div>
        <div className="mywork-container3">
            <a href="https://github.com/Thapaswinithota/GAT-With-TGSA.git" target="_blank" rel="noopener noreferrer">  
            <h1>3. GAT: A GAT for Enhanced Protein-protein Interaction and Drug Responce Prediction-04/2024</h1>
            </a>
            {/* <img src={biomed} alt="" /> */}
            {/* <p>*I meticulously implemented the "TGSA: protein-protein association-based twin graph neural networks for drug response prediction with similarity 
            augmentation" paper into "GAT: A Graph Attention Networks for Enhanced Protein-Protein Interaction and Drug Response Prediction.</p>
            <p>*Skills Used: Proficient in Python for coding and implementation, Advanced knowledge of PyTorch for developing and optimizing neural network models, Deep understanding of graph neural networks (GNN) and graph attention networks (GAT), Ability to comprehend and implement complex research 
                papers in the field of bioinformatics, Detail-oriented approach to modifying and improving existing codebase, Strong collaboration and teamwork skills honed in a research-intensive environment.</p> */}
        </div>
        <div className="mywork-container4">
            <a href="https://github.com/Thapaswinithota/Netflix-Clone.git" target="_blank" rel="noopener noreferrer">
            <h1>4. StreamFlix-06/2024</h1>
            </a>
            {/* <img src={netflix} alt="" /> */}
            {/* <p>*Implemented user authentication, movie browsing, and streaming features using React.js and Firebase for a seamless user experience.</p>
            <p>*Utilized HTML, CSS, and Bootstrap to create a visually appealing and responsive interface, ensuring compatibility across various devices.</p>
            <p>*Employed Firebase for real-time database management, enabling dynamic content updates and user interactions.</p>
            <p>*Skills Used
Front-end Development: React.js, HTML, CSS, Bootstrap
Back-end Development: Firebase (Authentication, Firestore)
Version Control: Git</p> */}
        </div>


      
    </div>
  )
}

export default MyWork
