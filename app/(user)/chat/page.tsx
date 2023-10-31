import ChatList from "@/components/ChatList";

type ChatsPageProps = {
  params: {};
  searchParams: { error: string };
};

function ChatsPage({ searchParams: { error } }: ChatsPageProps) {
  return (
    <div>
      <ChatList />
    </div>
  );
}

export default ChatsPage;
