function fetchData() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Application Status</h3>
        <p>App is running successfully!</p>
        <p>Deployed at: ${new Date().toLocaleString()}</p>
        <p>Containerized with Docker</p>
        <p>Orchestrated with Kubernetes</p>
        <p>Deployed via CI/CD</p>
    `;
}