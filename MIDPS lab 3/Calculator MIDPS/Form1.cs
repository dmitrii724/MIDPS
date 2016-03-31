using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculator_MIDPS
{
    public partial class Form1 : Form
    {
        Double value = 0;
        String operation = "";
        bool operation_pressed = false;
        bool simbol = true;

        public Form1()
        {
            InitializeComponent();
            Thread.CurrentThread.CurrentCulture = Thread.CurrentThread.CurrentUICulture = new CultureInfo("en-US");
        }

        private void button_click(object sender, EventArgs e)
        {
            if ((result.Text == "0") || (operation_pressed))
                result.Clear();
            operation_pressed = false;
            Button b = (Button)sender;
            if(b.Text == ".")
            {
                if(!result.Text.Contains("."))
                    result.Text = result.Text + b.Text;
            }
            else
                 result.Text = result.Text + b.Text;
        }

        private void button16_Click(object sender, EventArgs e)
        {
            result.Text = "0";
        }

        private void operator_click(object sender, EventArgs e)
        {
            Button b = (Button)sender;
            if(value!= 0)
            {
                if (b.Text == "sqrt") 
                    result.Text = Operators.sqrt(Double.Parse(result.Text)).ToString();
                equal.PerformClick();
                operation_pressed = true;
                operation = b.Text;
                equation.Text = value + " " + operation;
            }
            else if (b.Text == "x^2")
            {
                result.Text = Operators.pow(Double.Parse(result.Text)).ToString();
                equal.PerformClick();
                operation_pressed = true;
                operation = b.Text;
                equation.Text = value + " " + operation;
            }
            else if (b.Text == "sqrt")
            {
                result.Text = Operators.sqrt(Double.Parse(result.Text)).ToString();
                value = Math.Sqrt(Double.Parse(result.Text));
            }
            else if (b.Text == "x^2")
            {
                result.Text = Operators.pow(Double.Parse(result.Text)).ToString();
                value = Math.Sqrt(Double.Parse(result.Text));
            }
            else
            { 
                operation = b.Text;
                value = Double.Parse(result.Text,CultureInfo.InvariantCulture.NumberFormat);
                operation_pressed = true;
                equation.Text = value + " " + operation;
            }
        }

        private void button18_Click(object sender, EventArgs e)
        {
            equation.Text = "";
            switch(operation)
            {
                case "+":
                    result.Text = Operators.Add(value, Double.Parse(result.Text)).ToString();
                    break;
                case "-":
                    result.Text = Operators.Sub(value, Double.Parse(result.Text)).ToString();
                    break;
                case "*":
                    result.Text = Operators.Mult(value, Double.Parse(result.Text)).ToString();
                    break;
                case "/":
                    result.Text = Operators.Div(value, Double.Parse(result.Text)).ToString();
                    break;
                default:
                    break;
            }

            value = Double.Parse(result.Text);
            operation = "";
        }

        private void button13_Click(object sender, EventArgs e)
        {
            result.Text = "0";
            value = 0;
            equation.Text = "";
        }

        private void Form1_KeyPress(object sender, KeyPressEventArgs e)
        {
            switch(e.KeyChar.ToString())
            {
                case "0":
                    zero.PerformClick();
                    break;
                case "1":
                    one.PerformClick();
                    break;
                case "2":
                    two.PerformClick();
                    break;
                case "3":
                    three.PerformClick();
                    break;
                case "4":
                    four.PerformClick();
                    break;
                case "5":
                    five.PerformClick();
                    break;
                case "6":
                    six.PerformClick();
                    break;
                case "7":
                    seven.PerformClick();
                    break;
                case "8":
                    eight.PerformClick();
                    break;
                case "9":
                    nine.PerformClick();
                    break;
                case "+":
                    add.PerformClick();
                    break;
                case "-":
                    sub.PerformClick();
                    break;
                case "*":
                    times.PerformClick();
                    break;
                case "/":
                    div.PerformClick();
                    break;
                case "=":
                    equal.PerformClick();
                    break;
                case "Enter":
                    equal.PerformClick();
                    break;
                default:
                    break;
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void decim(object sender, EventArgs e)
        {
            Button b = (Button)sender;
            if (b.Text == ".")
            {
                if (!result.Text.Contains("."))
                    result.Text = result.Text + b.Text;
            }
            else
                result.Text = result.Text + b.Text;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (simbol == true)
            {
                result.Text = "-" + result.Text;
                simbol = false;
            }
            else if (simbol == false)
            {
                result.Text = result.Text.Replace("-", "");
                simbol = true;
            }
        }
    }
}
