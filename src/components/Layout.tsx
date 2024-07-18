import { Layout as AntLayout } from 'antd'
const { Header, Content } = AntLayout
import styled from 'styled-components'

const HeaderContainer = styled.div`
  color: red;
`

interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <AntLayout style={layoutStyle}>
      <Header style={headerStyle}>
        <HeaderContainer>
          Header
        </HeaderContainer>
      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>
    </AntLayout>
  )
}

export default Layout