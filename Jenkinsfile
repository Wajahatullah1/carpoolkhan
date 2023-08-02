pipeline {
    agent any
    environment {
        DOCKER_HOST = 'tcp://172.17.0.1:2726'
    }
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
                    def imageName = "wajahatullah1/carpoolkhan:${env.BUILD_NUMBER}"
                    docker.build(imageName, '-f Dockerfile .')
                }
            }
        }
    }
}
