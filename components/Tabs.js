import { useState, Children } from 'react';
import { Box, Flex } from 'theme-ui';

export const TabItem = ({ children }) => {
  return <Box>{children}</Box>;
};

const DEFAULT_LABELS = {
  seth: 'Seth',
  ethersjs: 'Ethers JS (v5)',
};

export const SyntaxTabs = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(
    Children.toArray(children)[0].props.value
  );

  return (
    <Box>
      <Flex sx={{ alignItems: 'center' }}>
        {Children.toArray(children).map(({ props: { value } }) => {
          const label = DEFAULT_LABELS[value];
          if (!label) {
            throw new Error(`Unexpected value ${value}, couldn't find label`);
          }
          const activeStyles = {
            color: 'primary',
            '&:before': {
              display: 'block',
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              bg: 'primary',
            },
          };

          return (
            <Box
              key={value}
              onClick={() => setSelectedValue(value)}
              sx={{
                cursor: 'pointer',
                px: 2,
                mr: 2,
                fontSize: 4,
                fontWeight: 'semiBold',
                position: 'relative',
                ...(selectedValue === value ? activeStyles : undefined),
              }}
            >
              {label}
            </Box>
          );
        })}
      </Flex>
      <Box>
        {
          Children.toArray(children).filter(
            child => child.props.value === selectedValue
          )[0]
        }
      </Box>
    </Box>
  );
};
