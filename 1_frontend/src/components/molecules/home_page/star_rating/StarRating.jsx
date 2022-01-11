import React, { useState } from 'react';
// Style Imports
import {
  StarComponent,
  StarRatingInput,
  StyledHolderDiv,
} from './StarRating.style';
// react-icons Imports
import { BsStarFill } from 'react-icons/bs';
// Component Imports
import RelativeDiv from '../../divs/relative_div/RelativeDiv';
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Title from '../../../atoms/text/title/Title';
import Caption from '../../../atoms/text/caption/Caption';
const StarRating = ({ top, left, right, bottom }) => {
   // Hooks
    // -State
    // --local
  const [rating, setRating] = useState(4.5);
  const [hover, setHover] = useState(rating);
  return (
    <>
      <RelativeDiv top={top} left={left} right={right} bottom={bottom}>
        <DisplayFlexDiv direction='column'>
          <Title title02={true} color='black'>
            {rating}/5
          </Title>
          <Caption>Rating</Caption>
        </DisplayFlexDiv>
        <StyledHolderDiv>
          {[...Array(5)].map((star, i) => {
            const ratingValue = 1 + i;
            return (
              <label>
                <StarRatingInput
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <StarComponent>
                  <BsStarFill
                    size={36}
                    color={
                      ratingValue <= (hover || rating)
                        ? 'var(--yellow)'
                        : 'var(--gray)'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </StarComponent>
              </label>
            );
          })}
        </StyledHolderDiv>
      </RelativeDiv>
    </>
  );
};

export default StarRating;
