import { Badge } from '@chakra-ui/react'

interface Props {
    critic_score : number;
}

const CriticScore = ({critic_score} :Props) => {
    const color = critic_score > 75 ? 'green' : critic_score > 60 ?'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='5px'>
        {critic_score}
    </Badge>
  )
}

export default CriticScore