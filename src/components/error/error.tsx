import { ErrorContainer, ErrorDescription, ErrorMessage, ErrorHeader, ReloadButton } from './error.styles';

interface IErrorProps {
    message?: string;
    description?: string;
    onReload?: () => void;
}

export const Error = ({ message = 'Error occurred', description, onReload }: IErrorProps) => {
  return <ErrorContainer>
    <ErrorHeader>
      <ErrorMessage>
        {message}
      </ErrorMessage>
      {onReload && <ReloadButton onClick={onReload} />}
    </ErrorHeader>
    <ErrorDescription>
      {description}
    </ErrorDescription>
  </ErrorContainer>;
};