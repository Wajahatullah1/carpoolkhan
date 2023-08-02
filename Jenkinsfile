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
                    def imageName = "wajahatullah1/myapplication:${env.BUILD_NUMBER}"
                    docker.build(myimage, '-f Dockerfile .') // Use imageName instead of carpoolkhan
                }
            }
        }
        
        stage('Docker Push') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    def imageName = "wajahatullah1/myapplication:${env.BUILD_NUMBER}"
                    docker.withRegistry('https://hub.docker.com/repository/docker/wajahatullah1/myapplication/general', 'e061c2a1-35bd-4088-afa3-ff9ee3ee9336') {
                        docker.image(imageName).push()
                        
                    }
                }
            }
        }
    }
}
