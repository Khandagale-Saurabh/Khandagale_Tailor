import java.util.ArrayList;
import java.util.Stack;
public class Main 
{

    public static class Node
    {
    int data;
    ArrayList<Node> children;
    
    Node()
    {
     children=new ArrayList<>();
    }
    Node(int data)
    {
      this();
      this.data=data;
    }
    }
    public static Node construct(Integer input[])
    {
      Node root =new Node(input[0]);
      Stack <Node> st=new Stack<>();
      st.push(root);
      for(int i=1;i<input.length;i++)
      {
        Integer val=input[i];
        if(val==null)
        {
        st.pop();
        }
        else
        {
        Node node=new Node(val);
        st.peek().children.add(node);
        st.push(node);
        }
      }
      return root;
    }
    public static void display(Node node)
    {
      System.out.println(node.data+" ->");
      for(Node child:node.children)
      {
      System.out.println(child.data+" ");
      }
      System.out.println(".");
      for(Node child:node.children)
      {
        display(child);
      }
    }

       public static void main(String[] args)
      {
         Integer input[] = {10,20,50,null,60,null,null,30,70,null,80,110,null,120,null,null,90,null,null,40,100,null,null,null};
         Node root = construct(input);
         display(root);
      }
}
