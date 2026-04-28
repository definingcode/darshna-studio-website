export default function Container({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`mx-auto max-w-[1280px] px-6 lg:px-10 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
