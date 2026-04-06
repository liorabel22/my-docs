type VersionBannerProps = {
  version: string;
  className?: string;
};

export function VersionBanner({
  version,
  className,
}: VersionBannerProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-block',
        backgroundColor: '#42b883',
        color: '#ffffff',
        padding: '3px 8px',
        borderRadius: '7px',
        fontWeight: 900,
        verticalAlign: 'super',
        fontSize: '0.875rem',
      }}
    >
      {version}
    </div>
  );
}