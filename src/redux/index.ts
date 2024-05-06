import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store'
export const useAppDisptach = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();