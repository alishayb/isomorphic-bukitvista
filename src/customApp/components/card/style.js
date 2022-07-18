import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../settings/style-util'

const CardWrapper = styled.div`
  .guestImage {
    width: 70px;
    height: 70px;
    display: -webkit-inline-flex;
    display: -ms-inline-flex;
    display: inline-flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 35px;
    ${borderRadius('50%')};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .guestDetailInfo {
    display: flex;
    width: 100%;
    flex-direction: column;

    .guestName {
      color: ${palette('text', 0)};
      font-weight: 400;
      line-height: 1.2;
    }

    .description {
      color: ${palette('text', 2)};
      font-weight: 600;
      margin: 0 0 1em;
      line-height: 1.5;
    }
  }

  .guestBookDetail {
    display:flex;

    .detailKey {
      font-weight: 600;
    }
  }

  .detailKey div, .detailValue p{
    margin-bottom:1em;
    margin-right:1.5em;
  }
`;

export { CardWrapper };
