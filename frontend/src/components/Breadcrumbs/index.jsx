import React, { Fragment } from "react";
import { Chevron, CompanyIcon, FilePath, Navigation, Path } from "./style";
import LGButtons from "@/components/View/LGButtons";
import Settings from "@/components/Menu/settings";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Text } from "@/styles";

const Breadcrumbs = ({ paths, prevHref, withMenu }) => {
  const router = useRouter();
  return (
    <Navigation>
      <FilePath>
        <CompanyIcon>R</CompanyIcon>
        <Chevron>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g transform="rotate(-90 12 12)">
              <path
                d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                fill="currentColor"
              />
            </g>
          </svg>
        </Chevron>
        <Path onClick={() => router.push(`/employee-file/`)}>
          Employee File
        </Path>
        {paths
          ? paths.map((path) => {
              return (
                <Fragment key={path.name + path.href}>
                  <Chevron>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g transform="rotate(-90 12 12)">
                        <path
                          d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </Chevron>
                  <Path
                    onClick={() => (path.href ? router.push(path.href) : null)}
                  >
                    {path.name}
                  </Path>
                </Fragment>
              );
            })
          : null}
      </FilePath>
      <div>
        {prevHref ? (
          <FilePath>
            <Chevron>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="rotate(-270 12 12)">
                  <path
                    d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Chevron>
            <Path onClick={() => (prevHref ? router.push(prevHref) : null)}>
              back
            </Path>
          </FilePath>
        ) : (
          <LGButtons />
        )}
      </div>
      {withMenu ? <Settings /> : null}
    </Navigation>
  );
};

export default Breadcrumbs;
