# ---------------- Runtime Stage ----------------
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Copy the pre-built jar from CI/CD
COPY target/*.jar app.jar

EXPOSE 8083

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
