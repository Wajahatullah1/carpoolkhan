pipeline {
    agent any
    stages {
        stage('Clone') {
            agent{
                docker { image 'node'}
            }
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/Wajahatullah1/carpoolkhan.git'
            }
        }
        

            }
 }
    
