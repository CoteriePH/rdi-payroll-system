import {
  Wrapper,
  Navigation,
  FilePath,  
  CompanyIcon,
  Chevron,
  Path,
  ListTable
} from "./styles";

import FolderIcon from "@/components/View/FolderIcon";
import PayslipIcon from "@/components/View/PayslipIcon";
import LGButtons from "@/components/View/LGButtons";

const AuditorEmployeeFile = () => {
  
  return (
    <Wrapper>
      {/* LIST VIEW */}
      <Navigation>
        <FilePath>
          <CompanyIcon>
            R
          </CompanyIcon>
          <Chevron>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
              <g transform="rotate(-90 12 12)"><path d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" fill="currentColor"/>
            </g>
            </svg>
          </Chevron>
          <Path>
            Employee File
          </Path>
          {/* di ko sure kung pano 'to i-modify */}
        </FilePath>
        <div>
          <LGButtons></LGButtons>
        </div>
      </Navigation>

      <ListTable>
       
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident enim, quidem, molestias ad, accusamus exercitationem facilis deserunt harum magni explicabo voluptate iure. Ipsum, ipsam illum. Fugiat labore soluta cupiditate inventore repellat modi culpa, optio laboriosam enim at consectetur quae totam repudiandae. Minima a ullam assumenda maxime, quasi optio officiis quidem sapiente neque officia vel eveniet sed ipsam fuga recusandae libero veritatis rerum consequuntur numquam aliquid voluptatibus saepe dolor eligendi quam. Eligendi aut incidunt rem, accusantium commodi rerum dolore iure culpa corrupti tenetur quo dolores. Ducimus perferendis numquam iste quas eligendi non laudantium ab! Vero molestias inventore blanditiis quos doloribus?
        
      </ListTable>
    </Wrapper>
  );
};

export default AuditorEmployeeFile;
