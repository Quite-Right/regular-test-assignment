import { ErrorContainer, ErrorDescription, ErrorMessage } from './error.styles';

interface IErrorProps {
    message?: string;
    description?: string;
}

export const Error = ({ message = 'Error occurred', description }: IErrorProps) => {
  return <ErrorContainer>
    <ErrorMessage>
      {message}
    </ErrorMessage>
    <ErrorDescription>
      {description}
    </ErrorDescription>
  </ErrorContainer>;
};