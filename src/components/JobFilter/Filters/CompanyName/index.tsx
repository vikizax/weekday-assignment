import { Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../../../redux';
import { setCompanyName } from '../../../../redux/slice/filters.slice';
import { FilterTitle } from '../FilterTitle';
import { useDebounce } from '../../../../hooks/useDebounce';
import { useEffect, useState } from 'react';

const FilterTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-inputSizeSmall': {
    padding: `${theme.typography.pxToRem(7.5)} ${theme.typography.pxToRem(8)}`,
    color: '#000',
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500,
    height: '1.4375rem'
  }
}))

type Params = {
  companyName: string | null
}

export const CompanyNameFilter = (({ companyName }: Params) => {
  const isActive = companyName ? true : false
  const disptach = useAppDispatch();
  const [serach, setSearch] = useState<string>(companyName ?? '')
  const debounceValue = useDebounce<string>(serach, 800)

  useEffect(() => {
    const toSetVal = debounceValue ? debounceValue : null
    disptach(setCompanyName(toSetVal))
  }, [debounceValue])

  return <Stack>
    {
      isActive && (
        <FilterTitle>
          Company Name
        </FilterTitle>
      )
    }
    <FilterTextField
      size='small'
      placeholder='Company Name'
      onChange={(event => {
        setSearch(event.target.value)
      })}
      value={serach}
    />
  </Stack>
})