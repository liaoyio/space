'use client';

import React, { useRef } from 'react';
import { Carousel } from 'antd';

// TAG React书写style时获取类型提示
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// TAG React如何给自定义组件类型声明 */
export const CustomComponentTypeDeclaration: React.FC = () => {
  // see: https://www.totaltypescript.com/strongly-type-useref-with-elementref
  // const carouselRef = useRef<React.ElementRef<typeof Carousel>>(null);
  const carouselRef = useRef<React.ComponentRef<typeof Carousel>>(null);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
    carouselRef.current?.next();
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
