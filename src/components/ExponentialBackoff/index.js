import React, { useEffect } from 'react'
import './index.scss'
import mermaid from 'mermaid'

const ExponentialBackoff = () => {
  const diagram = `
    sequenceDiagram
      participant Client
      participant Server
      Note over Client,Server: Initial Request
      Client->>Server: Request
      Server--xClient: Failed (5xx)
      Note over Client: Wait 2s + Random(0-1s)
      Client->>Server: Retry 1
      Server--xClient: Failed (5xx)
      Note over Client: Wait 4s + Random(0-2s)
      Client->>Server: Retry 2
      Server--xClient: Failed (5xx)
      Note over Client: Wait 8s + Random(0-4s)
      Client->>Server: Retry 3
      Server->>Client: Success (200)
      Note over Client,Server: Max retries or Success
  `

  const codeExample = `
const backoffRequest = async (url, options = {}) => {
  const MAX_RETRIES = 5;
  const BASE_DELAY = 1000; // 1 second
  
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      // Calculate delay with jitter
      const delay = Math.min(
        BASE_DELAY * Math.pow(2, attempt) + 
        Math.random() * 1000, // Add random jitter
        30000 // Max delay cap of 30 seconds
      );
      
      console.log(\`Attempt \${attempt + 1} failed. Retrying in \${delay}ms\`);
      await new Promise(resolve => setTimeout(resolve, delay));
      
    } catch (error) {
      if (attempt === MAX_RETRIES - 1) throw error;
    }
  }
}`

  useEffect(() => {
    // Render the mermaid diagram after component is mounted
    mermaid.initialize({ startOnLoad: true })
    mermaid.contentLoaded()
  }, [])

  return (
    <div className="backoff-container">
      <div className="backoff-card">
        <div className="card-header">
          <h2>Understanding Exponential Backoff with Jitter</h2>
        </div>
        <div className="card-content">
          <section>
            <h2>What is Exponential Backoff?</h2>
            <h3 style={{ color: 'black' }}>
              Exponential backoff is a retry strategy where each retry attempt
              waits longer before making the next attempt. The waiting time
              typically doubles with each retry, helping to prevent server
              overload and improve system resilience.
            </h3>
          </section>

          <section className="diagram-section">
            <h4>Retry Flow Diagram</h4>
            <div className="mermaid">{diagram}</div>
          </section>
          <section className="diagram-section">
            <div className="sequence-diagram">
              <div className="timeline">
                <div className="attempt">
                  <span className="time">t=0s</span>
                  <div className="arrow">
                    <span className="label">Initial Request</span>
                    <span className="response error">503 Error</span>
                  </div>
                </div>
                <div className="attempt">
                  <span className="time">t≈1s</span>
                  <div className="arrow">
                    <span className="label">Retry #1 (1s + jitter)</span>
                    <span className="response error">503 Error</span>
                  </div>
                </div>
                <div className="attempt">
                  <span className="time">t≈3s</span>
                  <div className="arrow">
                    <span className="label">Retry #2 (2s + jitter)</span>
                    <span className="response error">503 Error</span>
                  </div>
                </div>
                <div className="attempt">
                  <span className="time">t≈7s</span>
                  <div className="arrow">
                    <span className="label">Retry #3 (4s + jitter)</span>
                    <span className="response error">503 Error</span>
                  </div>
                </div>
                <div className="attempt">
                  <span className="time">t≈15s</span>
                  <div className="arrow">
                    <span className="label">Retry #4 (8s + jitter)</span>
                    <span className="response success">200 OK</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="key-components">
            <h3>Key Components:</h3>
            <ul>
              <li>Base Delay: Initial waiting time (1 second in example)</li>
              <li>Multiplier: Factor to increase delay (2 in example)</li>
              <li>
                Max Retries: Maximum number of retry attempts (5 in example)
              </li>
              <li>
                Max Delay: Cap on maximum delay time (30 seconds in example)
              </li>
            </ul>
          </section>

          <section>
            <h3>Understanding Jitter</h3>
            <p>
              Jitter adds randomness to the retry intervals to prevent
              "thundering herd" problems where multiple clients retry at exactly
              the same time. This randomness helps distribute the load on the
              server.
            </p>
          </section>

          <section className="retry-visualization">
            <h4>Retry Sequence with Jitter:</h4>
            <div className="retry-bars">
              <div className="retry-bar">
                <span>Attempt 1:</span>
                <div className="bar">
                  <div className="fill" style={{ width: '20%' }}></div>
                </div>
                <span>1s + random(0-1s)</span>
              </div>
              <div className="retry-bar">
                <span>Attempt 2:</span>
                <div className="bar">
                  <div className="fill" style={{ width: '40%' }}></div>
                </div>
                <span>2s + random(0-1s)</span>
              </div>
              <div className="retry-bar">
                <span>Attempt 3:</span>
                <div className="bar">
                  <div className="fill" style={{ width: '60%' }}></div>
                </div>
                <span>4s + random(0-1s)</span>
              </div>
              <div className="retry-bar">
                <span>Attempt 4:</span>
                <div className="bar">
                  <div className="fill" style={{ width: '80%' }}></div>
                </div>
                <span>8s + random(0-1s)</span>
              </div>
            </div>
          </section>

          <section className="code-section">
            <h3>Implementation Example</h3>
            <pre>
              <code>{codeExample}</code>
            </pre>
          </section>

          <section className="best-practices">
            <h3>Best Practices:</h3>
            <ul>
              <li>
                Always implement a maximum retry limit to prevent infinite
                retries
              </li>
              <li>
                Use jitter to prevent synchronized retries from multiple clients
              </li>
              <li>
                Implement a maximum delay cap to ensure reasonable response
                times
              </li>
              <li>Consider different retry strategies based on error types</li>
              <li>Log retry attempts for monitoring and debugging</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ExponentialBackoff
