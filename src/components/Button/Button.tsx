import { StyledButton } from './button.styles'

type Props = {
  label: string
  onClick?: () => void
}

export const Button = ({ label, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}