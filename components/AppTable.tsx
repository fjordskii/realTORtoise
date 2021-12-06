import React, { FunctionComponent } from 'react';

interface IAppTable {
  title: string;
  entity: Array<any>;
}

const AppTable: FunctionComponent<IAppTable> = ({ title, entity }) => {
  return (
    <table>
      <caption>{title}</caption>
      <thead>
        <tr>
          {Object.keys(entity[0]).map((eoKey: any, index: number) => {
            return <th key={index}>{eoKey}</th>;
          })}
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th colSpan={Object.keys(entity[0]).length}>realTORtoise.com</th>
        </tr>
      </tfoot>
      <tbody>
        {entity.map((entityValue: any, index: number) => {
          return (
            <tr key={index}>
              {Object.values(entityValue).map((eoValue: any, index: number) => {
                return <td key={index}>{eoValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { AppTable };
