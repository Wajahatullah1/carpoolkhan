pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/Wajahatullah1/carpoolkhan.git'
            }
        }
        
        
           
        stage('Docker Build') {
            steps {
                // Build Docker image using Dockerfile in the repository
                script {
                    def imageName = "Wajahatullah1/carpoolkhan:${env.BUILD_NUMBER}"
                    docker.build(imageName, '-f Dockerfile .') // Use imageName instead of carpoolkhan
                }
            }
        }
        
     
        }
    }
}
