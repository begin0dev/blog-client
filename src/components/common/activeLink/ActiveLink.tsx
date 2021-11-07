import { useMatch, useResolvedPath, Link, LinkProps } from 'react-router-dom';

function ActiveLink({ to, children, className, ...restProps }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={`${className ?? ''} ${match ? 'active' : ''}`} {...restProps}>
      {children}
    </Link>
  );
}

export default ActiveLink;
