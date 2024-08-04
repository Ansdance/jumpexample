import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '426b593e-7175-44dd-9a66-925c0c8cbdf7',
};

export const sampleWithPartialData: IAuthority = {
  name: '7dd9d7a7-4693-4132-a52c-6a3daed2f131',
};

export const sampleWithFullData: IAuthority = {
  name: '9aa43357-307c-4263-82a6-060cfbb68c44',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
