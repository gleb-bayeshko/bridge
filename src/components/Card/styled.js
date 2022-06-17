import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 7px 1px #818181;
  max-height: 314px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`

export const CardImage = styled.div`
  background-image: ${props => (props.src ? `url(${props.src})` : 'linear-gradient(45deg, #555 25%, transparent 25%, transparent), linear-gradient(-45deg, #555 25%, transparent 25%, transparent), linear-gradient(45deg, transparent 75%, #505a62 75%), linear-gradient(-45deg, transparent 75%, #555 75%)')};
  width: 226px;
  height: 314px;
  background-size: ${props => (props.src ? 'cover' : '60px 60px')};
`
