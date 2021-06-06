#include <stdio.h>

int main()
{
	int a[2][2],b[2][2],c[2][2],i,j;
	int m1,m2,m3,m4,m5,m6,m7;

	printf("Enter the 4 elements of first matrix: ");
	for(i=0;i<2;i++)
		for(j=0;j<2;j++)
			scanf("%d",&a[i][j]);

	printf("Enter the 4 elements of second matrix: ");
	for(i=0;i<2;i++)
		for(j=0;j<2;j++)
			scanf("%d",&b[i][j]);

	printf("\nThe first matrix is\n");
	for(i=0;i<2;i++)
	{
		printf("\n");
		for(j=0;j<2;j++)
			printf("%d\t",a[i][j]);
	}

	printf("\nThe second matrix is\n");
	for(i=0;i<2;i++)
	{
		printf("\n");
		for(j=0;j<2;j++)
			printf("%d\t",b[i][j]);
	}

	m1= (a[0][0] + a[1][1])*(b[0][0]+b[1][1]);
	m2= (a[1][0]+a[1][1])*b[0][0];
	m3= a[0][0]*(b[0][1]-b[1][1]);
	m4= a[1][1]*(b[1][0]-b[0][0]);
	m5= (a[0][0]+a[0][1])*b[1][1];
	m6= (a[1][0]-a[0][0])*(b[0][0]+b[0][1]);
	m7= (a[0][1]-a[1][1])*(b[1][0]+b[1][1]);
	
	printf("M1 %d",m1);
	
	printf("M2 %d",m2);
	
	printf("M3 %d",m3);
	
	printf("M4 %d",m4);
	
	printf("M5 %d",m5);
	
	printf("M6 %d",m6);
	
	printf("M7 %d",m7);
	printf("c11:= m1+m4-m5+m7    %d %d %d %d",m1,m4,m5,m7);
    printf("c12 :=m3+m5 %d %d",m3,m5);
    printf("c21:= m2+m4 %d %d",m2,m4);
    	
	printf("c22:= m1-m2+m3+m6    %d %d %d %d",m1,m2,m3,m6);
    
	c[0][0]=m1+m4-m5+m7;
	c[0][1]=m3+m5;
	c[1][0]=m2+m4;
	c[1][1]=m1-m2+m3+m6;

	printf("\nAfter multiplication using \n");
	for(i=0;i<2;i++)
	{
		printf("\n");
		for(j=0;j<2;j++)
			printf("%d\t",c[i][j]);
	}

	return 0;
}
