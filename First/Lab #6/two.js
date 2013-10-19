//---------------------------------------------------------------------------------
// »м€: two.js                                                  
// язык: JScript                                                   
// ќписание: задание 2             
//---------------------------------------------------------------------------------

var N = 3;

function showmatrix(arr)
{
	var out = new Array(N);
	for(var i = 0; i < N; i++)
	{
		out[i] = "";
		for(var j = 0; j < N; j++)
		{
			out[i] += " " + arr[i][j];
		}
	}
	for(var i = 0; i < N; i++)
	{
		WScript.Echo(out[i]);
	}
	delete out;
}

function mod7(arr)
{
	var k = 0;
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if(7%arr[i][j] == 0) k++;
		}
	}
	return k/2;
}


function sumnrow(arr)
{
	for(var i = 0; i < N; i++)
	{
		var k = 0;
		if((i+1)%2 == 1)
		{
			for(var j = 0; j < N; j++)
			{
				k+= arr[i][j];
			}
			WScript.Echo("Summ of ellems in row",i+1,":",k);
		}
	}
}

function mulncol(arr)
{
	for(var j = 0; j < N; j++)
	{
		var k = 1;
		if((j+1)%2 == 1)
		{
			for(var i = 0; i < N; i++)
			{
				if(arr[i][j]%2 == 0)
				{
					k *= arr[i][j];
				}
			}
			if(k != 1)WScript.Echo("Multiplication of even elems in column",j+1,":",k);
			else WScript.Echo("Column ",j+1,"hasn`t even elems");
		}
	}
}

function sumdiag(arr)
{
	var k = 0;
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if((i+j)<(N-1)) k += arr[i][j];
		}
	}
	return k;
}

function sort(arr)
{
	for(var i = 0; i < N; i++)
	{
		if ((i+1)%2 == 0)
		for(var k = 0; k < N; k++)
		{
			for(var j = k; j < N; j++)
			{
				if(arr[i][j] < arr[i][k]) 
				{
					var temp = arr[i][j];
					arr[i][j] = arr[i][k];
					arr[i][k] = temp;
				}
			}
		}
		else
		for(var k = 0; k < N; k++)
		{
			for(var j = k+1; j < N; j++)
			{
				if(arr[i][j] > arr[i][k]) 
				{
					var temp = arr[i][j];
					arr[i][j] = arr[i][k];
					arr[i][k] = temp;
				}
			}
		}
	}
}

function mulss(arr1,arr2)
{
	var E = new Array(N);
	for(var i = 0; i < N; i++)
	{
		E[i] = new Array(N);
	}
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if(i == j) E[i][j] = 1;
			else E[i][j] = 0;
		}
	}
	var l = 0;
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if(arr1[i][j] == E[i][j]) l++;
		}
	}
	var c = new Array(N);
	for(var i = 0; i < N; i++)
	{
		c[i] = new Array(N);
	}
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			c[i][j] = 0;
			for(var r = 0; r < N; r++) c[i][j] += arr1[i][r]*arr2[r][j];
		}
	}	
	showmatrix(c);

	var k = "";
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			k += " " + c[i][j];
		}
	}
	WScript.Echo("Oneline output:");
	WScript.Echo(k);

}

function inverse(T)
{
	var E = new Array(N);
	var arr = new Array(N);
	for(var i = 0; i < N; i++)
	{
		E[i] = new Array(N);
		arr[i] = new Array(N);
	}
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if(i == j) E[i][j] = 1;
			else E[i][j] = 0;
			arr[i][j] = T[i][j];
			parseFloat(arr[i][j]);
			parseFloat(E[i][j]);
		}
	}
	
	var lead_p;
	var lead = 0.1;
	var temp = 0.1;
	
	for (var i = 0; i < N; i++)
	{
		lead = arr[i][i];
		lead_p = i;
		for (var j = i; j < N; j++)
		{
			if (arr[i][j] > lead)
			{
				lead = arr[i][j];
				lead_p = j;
			}
			{
				for (j = i; j < N; j++)
				{
					temp = arr[i][j];
					arr[i][j] = arr[lead_p][j];
					arr[lead_p][j] = temp;
					temp = E[i][j];
					E[i][j] = arr[lead_p][j];
					E[lead_p][j] = temp;
				}
				for (j = 0; j < N; j++)
				{
					if (i != j)
					{
						temp = arr[j][i] / arr[i][i];
						
						for (var k = 0; k < N; k++)
						{
							arr[j][k] -= parseFloat(arr[i][k]*temp);
							E[j][k] -= parseFloat(E[i][k]*temp);
						}

					}
				}
			}
		}
	}
	var t4;
	for(var i = 0; i < N; i++)
	{
		t4 = arr[i][i];
		arr[i][i] /= t4;
		for (var k = 0; k < N; k++)
			E[i][k] /= t4;
	}
	WScript.Echo("Reverse:");

	showmatrix(E);
	WScript.Echo("111 Matrix :");
	mulss(E,T);
}

var matrix = new Array(N);
for(var i = 0; i < N; i++)
{
	matrix[i] = new Array(N);
}

for(var i = 0; i < N; i++)
{
	for(var j = 0; j < N; j++)
	{
		if (i == j) matrix[i][j] = 1;
		else
		{
			if (i > j) matrix[i][j] = 4;
			else matrix[i][j] = 7;
		}
	}
}
showmatrix(matrix);
WScript.Echo("Amount of elems divided to 7:",mod7(matrix));
sumnrow(matrix);
mulncol(matrix);
WScript.Echo("Summ of elems above subdiagonal :",sumdiag(matrix));

var smatrix = new Array(N);
for(var i = 0; i < N; i++)
{
	smatrix[i] = new Array(N);
}

for(var i = 0; i < N; i++)
{
	for(var j = 0; j < N; j++)
	{
		smatrix[i][j] = matrix[i][j];
	}
}

sort(smatrix);
WScript.Echo("Sorted matix:");
showmatrix(smatrix);
inverse(matrix);
WScript.Echo("Multiplication of origin matrix and sorted:");
mulss(matrix,smatrix);

