export const STEP_1 = '1';
export const STEP_2 = '2';
export const STEP_3 = '3';

export const STEPS = {
    [STEP_1]: {
      prev: null,
      next: STEP_2,
      keys: ['firstName','middleName','lastName','mobileNo','email','dob','age','bloodGroup','height','weight','gender','maritalStatus'],
    },
    [STEP_2]: {
      prev: STEP_1,
      next: STEP_3,
      keys: [
        'addressLine1',
        'addressLine2',
        'city',
        'state',
        'country',
        'pinCode'
      ],
    },
    [STEP_3]: {
      prev: STEP_2,
      next: null,
      keys: [],
    },
  };

  export const GENDER = [
    {
        label:'Male',
        value:1,
    },
    {
        label:'Female',
        value:2,
    }
  ]

  export const MARITAL_STATUS = [
    {
        label:'Single',
        value:1,
    },
    {
        label:'Married',
        value:2,
    },
    {
        label:'Divorced',
        value:3,
    },
    {
        label:'Widowed',
        value:4,
    }
  ]