pipeline {
    agent any

    environment {
        IMAGE_NAME = 'saiganesh1415/reactjs-project-master-frontend:latest'
        IMAGE_TAG = 'saiganesh1415/reactjs-project-master-frontend'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/saiganesh1415/reactjs-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    script {
                        sh """
                            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                            docker build -t $IMAGE_NAME .
                            docker logout
                        """
                    }
                }
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Test Containers') {
            steps {
                sh 'docker ps'
                sh 'docker-compose logs frontend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    script {
                        sh """
                            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                            docker tag $IMAGE_NAME $IMAGE_TAG
                            docker push $IMAGE_TAG
                            docker logout
                        """
                    }
                }
            }
        }
    }
}
