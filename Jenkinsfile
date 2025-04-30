// pipeline {
//     agent any

//     stages {
//         stage('Clone Repo') {
//             steps {
//                 // Clone directly to the workspace root
//                 git branch: 'master', url: 'https://github.com/pavansai2205/reactjs-project.git'
//             }
//         }

//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker-compose build'
//             }
//         }

//         stage('Start Containers') {
//             steps {
//                 sh 'docker-compose up -d'
//             }
//         }

//         stage('Test Containers') {
//             steps {
//                 sh 'docker ps'
//                 sh 'docker-compose logs frontend'
//             }
//         }
//     }
// }



pipeline {
    agent any

    environment {
        IMAGE_NAME = 'saiganesh1415/reactjs-project-master-frontend:latest'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/saiganesh1415/reactjs-project.git'
            }
        }

        stage('Build Docker Images') {
            steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub-credentials',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {
            script {
                sh """
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker build -t reactjs-project-master-frontend .
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
                        def imageName = "saiganesh1415/reactjs-project-master-frontend" // or use "reactjs_portfolio:${env.BUILD_NUMBER}"
                        sh """
                            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                            docker tag reactjs-project-master-frontend:latest ${imageName}
                            docker push ${imageName}
                            docker logout
                        """
                    }
                }
            }
        }
    }

   
}
