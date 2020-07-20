import { useState, Children } from 'react';
import { Box, Flex } from 'theme-ui';

export const TabItem = ({ children }) => {
  return <Box>{children}</Box>;
};

const DEFAULT_SYNTAX_VALUES = [
  { label: 'Seth', value: 'seth' },
  { label: 'Ethers JS (v5)', value: 'ethersjs' },
];

export const Tabs = ({ children, defaultValue, values }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <Box>
      <Flex sx={{ alignItems: 'center' }}>
        {values.map(({ label, value }) => {
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

export const SyntaxTabs = ({
  children,
  defaultValue = 'seth',
  values = DEFAULT_SYNTAX_VALUES,
}) => <Tabs {...{ defaultValue, values }}>{children}</Tabs>;
