import React, { FunctionComponent, useRef, useEffect } from 'react';

interface Props {
  onOutsideClick(): void;
}

const ClickOutside: FunctionComponent<Props> = ({
  children,
  onOutsideClick
}) => {
  const containerEl = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (e: Event) => {
    if (containerEl.current !== null) {
      const isOutside = !containerEl.current.contains(e.target as Node);
      if (isOutside) {
        onOutsideClick();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return <div ref={containerEl}>{children}</div>;
};

export default ClickOutside;
