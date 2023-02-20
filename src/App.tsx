import React, { useState, ChangeEvent, MouseEvent, FormEvent} from 'react';

import { Container } from './components/styled/Container.styled';
import Panel from './components/Panel';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';
import Section from './components/Section';
import ToggleLabel from './components/ToggleLabel';

interface DataProps {
  name: string,
  email: string,
  phone: string,
  plan: {
    option: string,
    yearly: boolean,
    addons: string[]
  }
}

const plans = {
  arcade: {
    title: 'Arcade',
    price: {
      yearly: 90,
      monthly: 9
    }
  },
  advanced: {
    title: 'Advanced',
    price: {
      yearly: 120,
      monthly: 12
    }
  },
  pro: {
    title: 'Pro',
    price: {
      yearly: 150,
      monthly: 15
    }
  }
}

const addons = [
  {
    id: 'online_service',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      yearly: 10,
      monthly: 1
    }
  },
  {
    id: 'storage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
      yearly: 20,
      monthly: 2
    }
  },
  {
    id: 'profile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      yearly: 20,
      monthly: 2
    }
  }
]

interface ErrorProps {
  name: string,
  email: string,
  phone: string
}

interface ValidProps {
  name: boolean,
  email: boolean,
  phone: boolean
}

function App() {

  const [errors, setErrors] = useState<ErrorProps>({
    name: '',
    email: '',
    phone: ''
  });
  const [valid, setValid] = useState<ValidProps>({
    name: false,
    email: false,
    phone: false
  });
  const [validated, setValidated] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(1);
  const [data, setData] = useState<DataProps>({
    name: '',
    email: '',
    phone: '',
    plan: {
      option: 'arcade',
      yearly: false,
      addons: []
    }
  });
  
  const nameValidator = value => {
    setValidated(true);
    if (!value) {
      setValid(prev => ({
        ...prev,
        name: false
      }));
      setErrors(prev => ({
        ...prev,
        name: "Name is required"
      }));
    }
    else {
      setValid(prev => ({
        ...prev,
        name: true
      }))
      setErrors(prev => ({
        ...prev,
        name: ""
      }));
    }
  };

  const emailValidator = value => {
    setValidated(true);
    if (!value) {
      setValid(prev => ({
        ...prev,
        email: false
      }))
      setErrors(prev => ({
        ...prev,
        email: "Email is required"
      }));
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(value)) {
      setValid(prev => ({
        ...prev,
        email: false
      }))
      setErrors(prev => ({
        ...prev,
        email: "Incorrect email format"
      }));
      
    }
    else {
      setValid(prev => ({
        ...prev,
        email: true
      }));
      setErrors(prev => ({
        ...prev,
        email: ""
      }));
    }
    
  };

  const phoneValidator = value => {
    setValidated(true);
    if (!value) {
      setValid(prev => ({
        ...prev,
        phone: false
      }))
      setErrors(prev => ({
        ...prev,
        phone: "Phone is required"
      }));
    } else if (!new RegExp(/^\+1\s\d{3}\s\d{3}\s\d{3}$/).test(value)) {
      setValid(prev => ({
        ...prev,
        phone: false
      }))
      setErrors(prev => ({
        ...prev,
        phone: "Incorrect phone format"
      }));
    }
    else {
      setValid(prev => ({
        ...prev,
        phone: true
      }));
      setErrors(prev => ({
        ...prev,
        phone: "Incorrect phone format"
      }));

    }
  };

  
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        emailValidator(data.email);
        break;
      case "phone":
        phoneValidator(data.phone);
        break;
      default:
        nameValidator(data.name);
   }
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  const handleBackClick = () => {
    setCurrent(prev => prev - 1);
  }

  const handleNextClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (current == 1) {
      validateForm();
      if (valid.name  && valid.email && valid.phone) {
        setCurrent(prev => prev + 1);
      }
    }
    else {
      setCurrent(prev => prev + 1);
    }
  }

  const validateForm = () => {
    nameValidator(data.name);
    emailValidator(data.email);
    phoneValidator(data.phone);
  }


  const handlePlanChange = (e) => {
    setData(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        option: e.target!.value
      }
    }))
  }

  const handleTermChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setData(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        yearly: e.target.checked
      }
    }))
  }

  const handleAddonChange = (e: ChangeEvent<HTMLInputElement>) => {
    let addons : string[] = data.plan.addons;
    if (e.target.checked) {
      addons.push(e.target.value);
    }
    else {
      addons = addons.filter((item) => item !== e.target.value);
    }
    setData(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        addons: addons
      }
    }))
  }
  
  
  const getTermString = (size: string = 'lg') => {
    switch (size) {
      case "sm":
        return (data.plan.yearly ? 'yr' : 'mo')
      case "md":
        return (data.plan.yearly ? 'year' : 'month');
      case "lg":
      default:
        return (data.plan.yearly ? 'yearly' : 'monthly')
    }
  }

  const getTotal = () => {
    let total = 0;
    total += plans[data.plan.option].price[getTermString('lg')];
    data.plan.addons.map((option: string, i: number) => {
      const a = addons.filter(o => o.id === option)[0];
      total += a.price[getTermString('lg')];
    })
    return total;
  }


  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  return (
    <Container>
        <Panel>
          {/* <!-- Sidebar start --> */}
          <Sidebar
            current={current}
          />
          {/* <!-- Sidebar end --> */}
          <Form onSubmit={handleSubmit}>
            {/* <!-- Step 1 start --> */}
            <Section step={1} current={current}>
              <Intro
                title="Personal info"
                description="Please provide your name, email address, and phone number."
              />
              <Input
                id="name"
                name="name"
                label="Name"
                value={data.name}
                placeholder="e.g. Stephen King"
                onChange={handleInputChange}
                error={(!valid.name && data.name != '')|| (!valid.name && validated)}
                errorText={errors.name}
              />
              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={data.email}
                placeholder="e.g. stephenking@lorem.com"
                onChange={handleInputChange}
                error={(!valid.email && data.email != '')|| (!valid.email && validated)}
                errorText={errors.email}
              />
              <Input
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                value={data.phone}
                placeholder="e.g. +1 234 567 890"
                onChange={handleInputChange}
                error={(!valid.phone && data.phone != '') || (!valid.phone && validated)}
                errorText={errors.phone}
              />
            </Section>
            {/* <!-- Step 1 end --> */}

            {/* <!-- Step 2 start --> */}
            <Section step={2} current={current}>
              <Intro
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
              />
              {errors &&
                <div>Errors
              
                </div>
              }
              <div className="flex-col flex-md space-between-md space-x-4-md">
                <Input
                  icon="./images/icon-arcade.svg"
                  id="plan_option1"
                  type="radio"
                  name="plan_option"
                  label="Arcade"
                  subLabel={data.plan.yearly ? `$${plans.arcade.price.yearly}/yr` : `$${plans.arcade.price.monthly}/mo`}
                  helperText={data.plan.yearly ? "2 months free" : ""}
                  checked={data.plan.option === "arcade"}
                  value="arcade"
                  onChange={handlePlanChange}
                />
                <Input
                  icon="./images/icon-advanced.svg"
                  id="plan_option2"
                  type="radio"
                  name="plan_option"
                  label="Advanced"
                  subLabel={data.plan.yearly ? `$${plans.advanced.price.yearly}/yr` : `$${plans.advanced.price.monthly}/mo`}
                  helperText={data.plan.yearly ? "2 months free" : ""}
                  checked={data.plan.option === "advanced"}
                  value="advanced"
                  onChange={handlePlanChange}
                />
                <Input
                  icon="./images/icon-pro.svg"
                  id="plan_option3"
                  type="radio"
                  name="plan_option"
                  label="Pro"
                  subLabel={data.plan.yearly ? `$${plans.pro.price.yearly}/yr` : `$${plans.pro.price.monthly}/mo`}
                  helperText={data.plan.yearly ? "2 months free" : ""}
                  checked={data.plan.option === "pro"}
                  value="pro"
                  onChange={handlePlanChange}
                />
              </div>

              <div className="group plan-term">
                <ToggleLabel
                  htmlFor="plan_term"
                  ifTrue={data.plan.yearly}
                >
                  Monthly
                </ToggleLabel>
                <div>
                  <Input
                    id="plan_term"
                    type="check-toggle"
                    name="plan_term"
                    checked={data.plan.yearly}
                    value=""
                    onChange={handleTermChange}
                  />
                </div>
                <ToggleLabel
                  htmlFor="plan_term"
                  ifTrue={!data.plan.yearly}
                >
                  Yearly
                </ToggleLabel>
              </div>

            </Section>
            {/* <!-- Step 2 end --> */}

            {/* <!-- Step 3 start --> */}
            <Section step={3} current={current}>
              
              <Intro
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
              />
              <div className="flex-col space-y-4-md">
                {addons.map((addon, i) => 
                  <Input
                    key={i}
                    id={`plan_addon${i}`}
                    type="checkbox"
                    name="plan_addon"
                    label={addon.title}
                    subLabel={addon.description}
                    helperText={`+${addon.price[data.plan.yearly ? 'yearly':'monthly']}/${getTermString('sm')}`}
                    checked={data.plan.addons.includes(addon.id)}
                    value={addon.id}
                    onChange={handleAddonChange}
                  />
                )}
              </div>
            </Section>
            {/* <!-- Step 3 end --> */}

            {/* <!-- Step 4 start --> */}
            <Section step={4} current={current}>
              <Intro
                title="Finishing up"
                description="Double-check everything looks OK before confirming."
              />
              {/* <!-- Dynamically add subscription and add-on selections here --> */}
              <div className="group">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="title">{ plans[data.plan.option].title } ({getTermString()})</h4>
                    <button onClick={() => setCurrent(2)} className="link">Change</button>
                  </div>
                  <div>
                    <strong className="title">
                      {`$${plans[data.plan.option].price[getTermString()]}/${getTermString('sm')}`} 
                    </strong>
                  </div>
                </div>
                <hr />
                {data.plan.addons.length > 0 ?
                  data.plan.addons.map((addon, i) => {
                    const a = addons.filter(ao => ao.id === addon)[0]
                      return (
                        <div className="addon flex justify-between">
                          <span>{a.title}</span>
                          <span className="blue">{`+$${a.price[data.plan.yearly ? 'yearly':'monthly']}/${getTermString('sm')}`}</span>
                        </div>
                      )
                }): <em>No add-ons selected.</em>}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  Total (per {getTermString('md')})
                </div>
                <div className="highlight">
                  { `$${getTotal()}/${getTermString('sm')}` }
                </div>
              </div>

            </Section>
            {/* <!-- Step 4 end --> */}

            {/* <!-- Step 5 start --> */}
            <Section step={5} current={current}>
              <div className="h-full flex-col items-center justify-center">
                <img src="./images/icon-thank-you.svg" alt="" />
                <Intro
                  center={true}
                  icon="test"
                  title="Thank you!"
                  description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a href='mailt:support@loremgaming.com'>support@loremgaming.com</a>."
                />
              </div>
            </Section>
            {/* <!-- Step 5 end --> */}
            
            <footer className="form-footer">
              <div>
                {(current > 1
                  //&& current < 5
                
                ) && <Button
                  onClick={handleBackClick}
                >Go Back</Button>}
              </div>
              <div>
                {current < 4 &&
                  <Button
                    onClick={handleNextClick}
                    variant="primary"
                  >Next Step</Button>
                }
                {current === 4 &&
                  <Button
                    onClick={handleNextClick}
                    variant="primary-blue"
                    type="submit"
                  >Confirm</Button>
                }
              </div>
            </footer>
          </Form>
      </Panel>
    </Container>
  );
}

export default App;
