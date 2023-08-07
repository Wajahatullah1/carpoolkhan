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
                sh 'docker build -t myapp .'
                }
            }
        }
    }
}
