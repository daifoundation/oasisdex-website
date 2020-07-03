/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

import React, { useRef, useState } from 'react';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const QuestionAndAnswer = ({ question, answer, onClick, isSelected }) => {
  const answerElement = useRef(null);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    }, 300);

    // todo: move subscribing to resize to Questions component
    window.addEventListener('resize', debouncedHandleResize);
    setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    // set the height after fonts have probably loaded, or system font is used
    const timeoutId = setTimeout(() => {
      setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    }, 3200);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      clearTimeout(timeoutId);
    };
  }, [height]);

  return (
    <Box
      key={question}
      sx={{maxWidth: '750px'}}
    >
      <Box sx={{my: '12px'}}>
        <div style={{ cursor: 'pointer' }} onClick={onClick}>
          <Heading variant="h4" mb={2} sx={{fontSize: '24px'}}>
            {question}
          </Heading>
          <div className="plus-minus-toggle" />
        </div>
      </Box>
      <Box sx={{
        maxHeight: isSelected ? height : 0,
        overflow: 'hidden',
        transition: 'max-height 0.2s ease'
      }}>
        <div ref={answerElement}>
          <Text as="div" sx={{py: '16px', lineHeight: '32px'}}>
            {answer}
          </Text>
        </div>
      </Box>
    </Box>
  );
};

const Questions = ({ questions, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Box
      style={{
        textAlign: 'left',
        fontSize: '18px',
        lineHeight: '25px',
        maxWidth: '800px'
      }}
      px={{ s: '12px', m: 0 }}
      {...props}
    >
      {questions.map(({ q, a }, index) => {
        const isSelected = index === selectedIndex;
        return (
          <div key={q}>
            <QuestionAndAnswer
              question={q}
              answer={a}
              onClick={() => setSelectedIndex(isSelected ? null : index)}
              isSelected={isSelected}
            />
          </div>
        );
      })}
    </Box>
  );
};

export default Questions;
