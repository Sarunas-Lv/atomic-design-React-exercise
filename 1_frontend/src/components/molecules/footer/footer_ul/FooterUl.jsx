import React from 'react';
import Ul from '../../../atoms/ul_li/Ul/Ul';
import Li from '../../../atoms/ul_li/Li/Li';
import Anchor from '../../../atoms/text/anchor/Anchor';
const FooterUl = () => {
  return (
    <>
      <Ul gap='32px'>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='white'>
            Home
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='white'>
            About
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='white'>
            Services
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='white'>
            Blog
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='white'>
            Contact
          </Anchor>
        </Li>
      </Ul>
    </>
  );
};

export default FooterUl;
