using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public  interface IEntity<T>
    {
        T Id { get; set; }
    }
}
