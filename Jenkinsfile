pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/Wajahatullah1/carpoolkhan.git'
            }
        }
        
        stage('Build') {
            steps {
                // Assuming your build process is here
                // For example, compiling code, running tests, etc.
            }
        }
        
        stage('Docker Build') {
            steps {
                // Build Docker image using Dockerfile in the repository
                script {
                    def imageName = "Wajahatullah1/carpoolkhan:${env.BUILD_NUMBER}"
                    docker.build(carpoolkhan, '-f Dockerfile .')
                }
            }
        }
        
        stage('Docker Push') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    def imageName = "wajahatullah1/myapplication:${env.BUILD_NUMBER}"
                    docker.withRegistry('https://hub.docker.com/repository/docker/wajahatullah1/myapplication/general', 'wajiikhan112') {
                        docker.image(carpoolkhan).push()
                        
                    }
                }
            }
        }
    }
}
