import { useState } from 'react'
import { Layout } from 'antd'
const { Header, Content } = Layout
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  color: red;
`

function App() {
  const [count, setCount] = useState(0)

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
  }
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
  }
  
  const layoutStyle = {
    overflow: 'auto',
    width: '100vw',
    height: '100vh'
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <HeaderContainer>
          Header
        </HeaderContainer>
      </Header>
      <Content style={contentStyle}>
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      </Content>
    </Layout>
  )
}

export default App
