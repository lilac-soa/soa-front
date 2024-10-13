export interface BadgeProps {
  children: string;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="box-border h-[30px] py-1 px-2 p-4 rounded-lg bg-secondary-500 flex justify-center items-center">
      <span className="text-black-100 typo-body-3">{children}</span>
    </div>
  );
};
