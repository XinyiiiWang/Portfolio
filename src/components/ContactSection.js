import React from 'react';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactSectionStyle from '../styles/ContactSectionStyle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />
        <div className="contactSection_wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+460724420618" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="is.xinyiwang@outlook.com"
            />
            <ContactInfoItem text="Stockholm, Sweden" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
