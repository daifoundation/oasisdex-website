/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

const QuestionAndAnswer = ({ question, answer }) => {
  return (
    <Box
      key={question}
      sx={{maxWidth: '750px'}}
    >
      <Box sx={{my: '12px'}}>
        <div>
          <Heading variant="h4" mb={2} sx={{fontSize: '24px'}}>
            {question}
          </Heading>
          <div className="plus-minus-toggle" />
        </div>
      </Box>
      <Box>
        <div>
          <Text as="div" sx={{py: '16px', lineHeight: '32px'}}>
            {answer}
          </Text>
        </div>
      </Box>
    </Box>
  );
};

const QuestionsStatic = ({ questions, ...props }) => {
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
      {questions.map(({ q, a }) => {
        return (
          <div key={q}>
            <QuestionAndAnswer
              question={q}
              answer={a}
            />
          </div>
        );
      })}
    </Box>
  );
};

export default QuestionsStatic;
