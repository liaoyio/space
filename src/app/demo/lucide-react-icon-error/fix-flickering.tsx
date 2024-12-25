import { memo } from 'react';
import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

/*
   在侧边栏和导航栏组件中，我导入了每个图标组件，并通过 name 属性使用图标。
   但是，每次单击图标或发生事件时，所有图标组件都会出现闪烁问题。
   我通过添加 React.memo 来解决这个问题， 同样的问题在这里，这也会导致客户端组件中的热重载非常滞后。
   see： https://github.com/lucide-icons/lucide/issues/2081
*/

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

// eslint-disable-next-line react/display-name
const Icon = memo(({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);
  return <LucideIcon {...props} />;
});

export default Icon;
